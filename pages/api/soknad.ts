import soknadByIdent from '../../src/mocks/soknadByIdent';
import { NextRequest, NextResponse } from 'next/server';
import complexTimeline from '../../src/mocks/complexTimeline';

export default function handler(req: NextRequest, res: NextResponse) {
  res.status(200).json(complexTimeline);
}
