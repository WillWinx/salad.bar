
# Salad.bar

An application allows the user to create, find and curate salads for themselves based on seasonal ingredients as well as random nature.

# The application will include

Three modules

Pick your Salad

Randomize

Select Recipe

Pick your salad

This part of the website will allow you to pick certain ingredients and create a salad recipe.

You can chose to limit yourself to different limitations:

Seasonal, categorical, classic combinations

Inculding limitations for dietary preferences

You will also have the opportunity to choose “Limitless”

In this mode the user will be able to chose any combinations of ingredients (only for the salad pros)

After you’ve chosen mode, you will be introduced to accordions of different categories of ingredients.

Base, Sweet, Crunchy, Savoury, Cheese, Dressings

Categories will open and allow the user free access to any and all of the ingredients based on their choice of limitation.

Underneath categories like sweet, crunchy, savoury there will be a slider filtering out ingredients based on the amount the user defines:

Example: The user slides the crunchy-slider up to the highest tier (Maximum crunch), and ends up only viewing the likes of nuts, seeds etc.

Underneath categories like dressings, base and cheese, there will be literal buttons to help filter out certain types so the user can easily find what they’re looking for.

When the user is done choosing items for their recipe, they will be greeted with the final step asking them to add a title, description, and an icon to define their salad.

This icon will primarily be 8  pre-saved icons

If the user chooses to, down the line, they can replace the icon with a proper picture of their salad.

After this, the user will be taken to a page with their salad presented as a recipe. This recipe can be saved to the computer as pdf, printed, or deleted.

After creation the recipe will be able to be viewed in the recipe list.

The salad website will use the following technologies:

React for front-end

C#/ .Net for backend (if needed)

Material + others for Design:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
