import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {


  const h1Style = `mb-8 text-6xl font-semibold tracking-tighter text-green-800`
  const h2Style = `my-4 font-bold text-lg text-green-800 mt-14`

  return (
    <section>
      <Image
        src="/images/will-dennis-round.png"  // Updated to match the actual file
        alt="Will Dennis"
        width={160}
        height={160}
        className="mb-8"  // Since it's a round image, you might want equal width/height
      />
      <h1 className={h1Style}>
        Will Dennis
      </h1>

      <p className="mb-4">
        {`I’m a two-time start up founder and former VP of Product at WeightWatchers with a track record for building viral, engaging consumer products like Houseparty and WhatsApp that are used by billions.`}
      </p>
           <p className="mb-4">
        {`I'm currently building a new company. We're in stealth but more soon.`}
      </p>
      <h2 className={h2Style}>
        {`Get in touch`}
      </h2>
      <p className="mb-4">
        {`Feel free to reach out if you think I could be helpful or just to say hello. williamldennis@gmail.com`}
      </p>
      <h2 className={h2Style}>
        {`Previous Projects`}
      </h2>
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full rounded-lg shadow-md border border-gray-200"
            controls
          >
            <source src="/videos/waterfall-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-center mt-2 font-medium text-green-800">Waterfall</p>
        </div>
        <div className="w-1/2">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full rounded-lg shadow-md border border-gray-200"
            controls
          >
            <source src="/videos/dreammachine-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-center mt-2 font-medium text-green-800">The Dream Machine</p>
        </div>
      </div>
      <p className="mb-4">
        <a href="/projects" className="text-green-800 hover:text-green-600 underline">
          See my working LLM thesis and related projects →
        </a>
      </p>

      <h2 className={h2Style}>
        {`Previous Product & Engineering Work`}
      </h2>
      <ol className='list-decimal ml-8'>
        <li>Fractal AI Engineering Program - S25 (building agents, semantic search)</li>
        <li>VP of Product at WeightWatchers ($1 billion revenue digital product line)</li>
        <li>Product Manager at WhatsApp (2 billion user product surface)</li>
        <li>Head of Product at HouseParty (acquired by Epic Games)</li>
        <li>Product and UX consultant (Peloton, Stash, Human Ventures)</li>
        <li>CEO and cofounder of two seed-funded start ups (failed but learned :))</li>
      </ol>

      <h2 className={h2Style}>
        {`Previous Writing & Storytelling Work`}
      </h2>
      <ol className='list-decimal ml-8'>
        <li>Co-Creator "Other People" TV Series (sold to FX Network)</li>
        <li>Writer & Director of Multiple Short Films (3 Vimeo Staff Picks)</li>
        <li>Writer & Director "Vanilla" (Award-Winning Feature Film)</li>
        <li>Occasional youtuber (250k+ views)</li>
        <li>Sometimes tech writer (blog posts below)</li>
      </ol>
      <h2 className={h2Style}>
        {`Blog`}
      </h2>
      <div className="">
        <BlogPosts />
      </div>
    </section>
  )
}
