import Image from 'next/image'

export default function Home() {
  const secret = process.env.NEXT_PUBLIC_CHAT_GPT_SECRET_KEY
  console.log(secret);
  
  return (
    <>
      <div className="w-full h-full flex flex-wrap justify-between flex-grow gap-2">
        <div className="bg-white w-52 h-52 rounded-lg border"></div>
      </div>
    </>
  )
}
