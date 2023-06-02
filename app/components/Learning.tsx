import Link from "next/link";

export default function Learning() {
  const learnings = [
    {
      title: "Ethereum | Solidity",
      link: "https://university.alchemy.com/ethereum",
      author: "Alchemy",
    },
    {
      title: "Ethereum | Solidity",
      link: "https://www.udemy.com/course/blockchain-developer/",
      author: "Thomas Wiesner",
    },
    {
      title: "Solana | Rust",
      link: "https://www.udemy.com/course/solana-developer/",
      author: "Arjunveer Singh",
    },
    {
      title: "Ethereum | Solidity",
      link: "https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/",
      author: "Stephen Grider",
    },
  ];

  return (
    <div className="relative h-36 sm:h-52 bg-gray rounded-3xl my-4 text-md sm:text-lg md:text-xl overflow-hidden">
      <ul className="absolute px-6 my-4 overflow-y-scroll w-full h-full pb-4">
        {learnings.map((learning, index) => (
          <li key={index} className="mb-2 break-words">
            <Link
              href={learning.link}
              target="_blank"
              className="border-red border-l-2 pl-1"
            >
              {" "}
              {learning.title} by{" "}
              <span className="text-lime">{learning.author}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
