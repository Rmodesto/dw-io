// pages/api/dreams.ts
import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const dataPath = path.join(process.cwd(), 'db.json');

interface Dream {
  dream: string;
}

interface DreamsData {
  dreams: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const fileContents = fs.readFileSync(dataPath, 'utf8');
        const data: DreamsData = JSON.parse(fileContents);
        res.status(200).json(data.dreams);
        break;
      case 'POST':
        const dream = (req.body as Dream).dream;
        if (!dream) {
          res.status(400).json({ error: 'No dream provided' });
          return;
        }
        const fileData = fs.readFileSync(dataPath, 'utf8');
        const jsonData: DreamsData = JSON.parse(fileData);
        jsonData.dreams.push(dream);
        fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2));
        res.status(200).json({ status: 'success', message: 'Dream added.' });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
