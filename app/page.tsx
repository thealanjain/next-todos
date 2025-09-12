"use client"

import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h2>Todo's Planner</h2>
                        <div className="d-flex align-items-center border border-1 border-secondary rounded px-3">
                            <Link href="/signin">Sign In</Link>
                            <span className="mx-2">{" | "}</span>
                            <Link href="/signup">Sign Up</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mt-5">
                            <Image
                                src="/todos-hero.jpg"
                                alt="Home Image"
                                width={800}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
