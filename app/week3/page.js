import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="flex min-h-screen  bg-pink-50 flex-col items-center pt-24">
            <h1 className="text-2xl font-bold m-2">Shopping List</h1>
            <ItemList />
        </main>
    )
}