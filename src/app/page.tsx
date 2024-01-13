import Link from "next/link";
export default function Home() {
    return (
        <div>
            <div>
                <Link href={"/performance"}>Go to performance</Link>
                <Link href={"/reliability/details"}>Go to reliability</Link>
                <Link href={"/scale"}>Go to scale</Link>
            </div>
            Home Page
        </div>
    );
}
