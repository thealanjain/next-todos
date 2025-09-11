import Link from "next/link";

export default function Home() {
    return (
        <div className="d-flex justify-content-between">
            <h1>Issue Planner</h1>
            <div>
                <Link href="/signin" className="btn btn-primary me-2">
                    Sign In
                </Link>
                <Link href="/signup" className="btn btn-secondary">
                    Sign Up
                </Link>
            </div>
        </div>
    )
}
