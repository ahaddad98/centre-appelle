import calls from '../../../data/calls.json'

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ calls: calls.data })
}
