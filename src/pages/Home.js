import React from "react";
import Hero from "../components/Hero";
import Properties from "./Properties";


export default function Home() {
return (
<>
<Hero />
<div className="container mt-5">
<h2 className="mb-4">Featured Properties</h2>
<Properties limit={3} />
</div>
</>
);
}