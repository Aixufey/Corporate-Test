import Link from "next/link";

const HeaderItem: React.FC = () => {
    return (
        <div>
            <Link href={"/performance"}>Go to performance</Link>
            <Link href={"/reliability/details"}>Go to reliability</Link>
            <Link href={"/scale"}>Go to scale</Link>
        </div>
    );
};
export default HeaderItem;
