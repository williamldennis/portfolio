import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {


  const h1Style = `mb-8 text-6xl font-semibold tracking-tighter text-green-800`
  const h2Style = `my-4 font-bold text-lg text-green-800`

  return (
    <section>
      <Image
        src="/images/will-dennis-round.png"  // Updated to match the actual file
        alt="Will Dennis"
        width={180}
        height={180}
        className="mb-8"  // Since it's a round image, you might want equal width/height
      />
      <h1 className={h1Style}>
        Will Dennis
      </h1>

      <p className="mb-4">
        {`I’m a former VP of Product and two-time startup founder with a background in building joyful, engaging consumer products — from social platforms to health tools.`}
      </p>
           <p className="mb-4">
        {`I'm currently building AI-centered products focused on the future of work and human connection.`}
      </p>
      <p className="mb-4">
        {`I value simplicity, creativity, in-person collaboration, design, and craft - which is why the black text on this site actually contains a hint of green (#001301) to make things feel more cohesive.`}
      </p>
      <p className="mb-4">
        {`I do my best work when I can blend product leadership with creativity, storytelling, and technology to create new experiences people can't live without.`}
      </p>

      <h2 className={h2Style}>
        {`Select Product & Engineering Work`}
      </h2>
      <ol className='list-decimal ml-8'>
        <li>Fractal AI Accelerator - Summer 2025 (building agents, semantic search)</li>
        <li>VP of Product at WeightWatchers ($1 billion revenue digital product line)</li>
        <li>Product Manager at WhatsApp (2 billion user product surface)</li>
        <li>Head of Product at HouseParty (acquired by Epic Games)</li>
        <li>Product and UX consultant (Peloton, Stash, Human Ventures)</li>
        <li>CEO and cofounder of two seed-funded start ups (failed but learned :))</li>
      </ol>

      <h2 className={h2Style}>
        {`Select Writing & Storytelling Work`}
      </h2>
      <ol className='list-decimal ml-8'>
        <li>Co-Creator "Other People" TV Series (sold to FX Network)</li>
        <li>Writer & Director of Multiple Short Films (3 Vimeo Staff Picks)</li>
        <li>Writer & Director "Vanilla" (Award-Winning Feature Film)</li>
        <li>Occasional youtuber (100k+ views)</li>
        <li>Sometimes tech writer (blog posts below)</li>
      </ol>
      <h2 className={h2Style}>
        {`Get in touch`}
      </h2>
      <p className="mb-4">
        {`Feel free to reach out if you think I could be helpful or just to say hello. williamldennis@gmail.com`}
      </p>
      <h2 className={h2Style}>
        {`Blog`}
      </h2>
      <div className="">
        <BlogPosts />
      </div>
    </section>
  )
}
