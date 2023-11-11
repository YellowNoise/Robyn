import { ArbitraryRequest, ArbitraryResponse } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import * as fs from 'fs';

export async function POST(request: NextRequest) {
    const res = await request.json();

    // do fancy things
    // call R code
    // save job info to db
    // etc ...
    const response : ArbitraryResponse = {
        arbitraryString: res.arbitraryString
    };
    console.log(fs.realpathSync('./'));


    return NextResponse.json(response);
  }
