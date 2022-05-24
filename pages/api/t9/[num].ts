import type { NextApiRequest, NextApiResponse } from 'next'
import allT9 from '../../../utils/t9';

type Data = {
  t9list: string[]
}

export default function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  const method = req.method;
  const num: string | string[] = req.query.num;  
  if (Array.isArray(num)){
    return res.status(400).end(`Method ${method} Not Allowed`);
  }
  switch (method) {
    case "GET":
      if (!num || typeof num !== 'string'){
        res.status(400);
      }
      let result: string[] = allT9(num)

      return res.status(200).json({ t9list: result })
      
    default:
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
