import HeadingText from "../RecipePage/components/HeadingText";
import ListItem from "../RecipePage/components/ListItem";

function RecipePage() {
    return (
        // Center Container
        <div className="w-full flex justify-center py-10 text-primary bg-primary min-w-screen min-h-screen">
            {/*  Main Container */}
            <div className="max-w-[600px] flex flex-col p-10 bg-secondary rounded-lg">
                {/* Image Container */}
                <div>
                    <img
                        src="/assets/images/image-omelette.jpeg"
                        alt="Picture of an omelette"
                        className="rounded-lg shadow-md"
                    />
                </div>

                {/* Hero Text Container */}
                <div>
                    <h2 className="text-3xl font-bold tracking-wide my-5">
                        Simple Omelette Recipe
                    </h2>

                    <p>
                        An easy and quick dish, perfect for any meal. This
                        classic omelette combines beaten eggs cooked to
                        perfection, optionally filled with your choice of
                        cheese, vegetables, or meats.
                    </p>
                    {/* Prep Container */}
                    <div className="p-5 my-5 bg-accent rounded-lg">
                        <HeadingText text="Preparation time" />
                        <ul className="list-disc px-5">
                            <ListItem
                                boldText={"Total: "}
                                text={"Approximately 10 minutes"}
                            />
                            <ListItem
                                boldText={"Preparation: "}
                                text={"5 minutes"}
                            />
                            <ListItem
                                boldText={"Cooking: "}
                                text={"5 minutes"}
                            />
                        </ul>
                    </div>

                    {/* Ingredients Container */}
                    <div>
                        <HeadingText text="Ingredients" />
                        <ul className="list-disc px-5">
                            <ListItem boldText={""} text={"2-3 large eggs"} />
                            <ListItem boldText={""} text={"Salt, to taste"} />
                            <ListItem boldText={""} text={"Pepper, to taste"} />
                            <ListItem
                                boldText={""}
                                text={"1 tablespoon of butter or oil"}
                            />
                            <ListItem
                                boldText={""}
                                text={
                                    "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
                                }
                            />
                        </ul>
                    </div>

                    <hr className="my-7" />

                    {/* Instructions */}
                    <HeadingText text="Instructions" />
                    <ol className="list-decimal px-5">
                        <ListItem
                            boldText={"Beat the eggs: "}
                            text={
                                "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
                            }
                        />
                        <ListItem
                            boldText={"Heat the pan: "}
                            text={
                                "Place a non-stick frying pan over medium heat and add butter or oil."
                            }
                        />
                        <ListItem
                            boldText={"Cook the omelette: "}
                            text={
                                "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
                            }
                        />
                        <ListItem
                            boldText={"Add fillings (optional): "}
                            text={
                                "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
                            }
                        />
                        <ListItem
                            boldText={"Fold and serve: "}
                            text={
                                "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
                            }
                        />
                        <ListItem
                            boldText={"Enjoy: "}
                            text={
                                "Serve hot, with additional salt and pepper if needed."
                            }
                        />
                    </ol>

                    <hr className="my-7" />

                    {/* Nutrition */}
                    <div>
                        <HeadingText text="Nutrition" />
                        <p className="text-sm mt-3">
                            The table below shows nutritional values per serving
                            without the additional fillings.
                        </p>

                        <div className="p-5 divide-y text-sm">
                            <div className="flex py-2 items-center">
                                <div className="flex-1">Calories</div>
                                <div className="font-bold flex-1 text-secondary">
                                    277kcal
                                </div>
                            </div>

                            <div className="flex py-2">
                                <div className="flex-1 ">Carbs</div>
                                <div className="font-bold flex-1 text-secondary">
                                    0g
                                </div>
                            </div>

                            <div className="flex py-2">
                                <div className="flex-1">Protein</div>
                                <div className="font-bold flex-1 text-secondary">
                                    20g
                                </div>
                            </div>

                            <div className="flex py-2">
                                <div className="flex-1">Fat</div>
                                <div className="font-bold flex-1 text-secondary">
                                    22g
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipePage;
