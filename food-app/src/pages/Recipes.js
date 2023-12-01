import RecipeCard from "../components/RecipeCard"
import PreviousSearches from "../components/previousSearches"
export default function Recepies() {

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                <RecipeCard />

            </div>
        </div>
    )
}