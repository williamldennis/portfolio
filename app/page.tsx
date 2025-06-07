import { BlogPosts } from 'app/components/posts'

export default function Page() {


  const h1Style = `mb-8 text-6xl font-semibold tracking-tighter text-green-400`
  const h2Style = `my-4 font-bold text-lg text-green-400`

  return (
    <section>
      <h1 className={h1Style}>
        Will Dennis
      </h1>
      <p className="mb-4">
        {`I'm a product leader, filmmaker, and software engineering student. I'm currently learning full stack web development at Fractal Tech to better build my own AI start up (coming soon).`}
      </p>
      <h2 className={h2Style}>
        {`Select Product & Engineering Work`}
      </h2>
      <ol className='list-decimal ml-8'>
        <li>Student at Fractal Tech Bootcamp</li>
        <li>VP of Product at WeightWatchers</li>
        <li>PM at WhatsApp</li>
        <li>Head of Product at HouseParty</li>
        <li>Product consultant for companies like Peloton, Stash, and Human Ventures</li>
        <li>CEO and product cofounder of two seed-funded companies</li>
      </ol>

      <h2 className={h2Style}>
        {`Select Film Work`}
      </h2>
      <ol className='list-decimal ml-8'>
        <li>Co-Creator "Other People" TV Series (sold to FX Network)</li>
        <li>Writer & Director of Multiple Vimeo Staff Picks</li>
        <li>Writer & Director Award-Winning Feature Film "Vanilla"</li>
        <li>Maker of youtube comedy videos</li>
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
