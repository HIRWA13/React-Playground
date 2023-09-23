import Pizza from "./pizza2.webp";
import HomemadePizza from './homemade-pizza.jpg'

export default function Puzzeria() {
  return (
    <>
      <section className="w-2/4  mt-5 mx-auto flex p-2 gap-2">
        <div className="bg-white shadow-lg w-2/4">
          <div className="h-2/4">
            <img src={Pizza} className="w-full h-full"/>
          </div>
          <article className="py-2 px-1">
            <h1 className="text-lg font-bold">Enjoy the Best Pizza in Town</h1>
            <p className="mt-2">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae excepturi aliquid fugit alias beatae maiores consequuntur accusantium ipsam illo?</p>
          </article>
        </div>
        <div className="bg-white shadow-lg w-2/4">
          <div className="h-2/4">
            <img src={HomemadePizza} className="w-full h-full"/>
          </div>
          <article className="py-2 px-1">
            <h1 className="text-lg font-bold">Want a test on our Home made Pizza?</h1>
            <p className="mt-2">We are one call away, Just dial Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias necessitatibus possimus sequi, nobis veniam consequuntur dolorum eaque nisi praesentium vero.</p>
          </article>
        </div>
      </section>
    </>
  );
}
