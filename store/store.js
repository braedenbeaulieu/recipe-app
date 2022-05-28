let recipes = [
    {
        id: 1,
        date_created: 1651804542849,
        slug: 'taco-dip',
        blog_slug: 'taco-dip',
        title: 'Taco Dip',
        short: 'The Crowd Pleaser',
        description: 'Be careful. This stuff is addictive.',
        featured_image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Beefy-Taco-Dip_exps1917_BOS2469759B02_08_2bC_RMS.jpg',
        featured_image_alt: 'Taco dip',
        tags: [
            'mexican', 'cheesey', 'tex-mex', 'party'
        ],
        meta: {
            difficulty: 1,
            servings: '2',
            prep_time: '5',
            cook_time: '30',
            cooks_note: 'Try adding chopped jalapeños to the ground beef after its browned.',
            oven: {
                temp_unit: 'F',
                temp: '375'
            }
        },
        ingredients: [
            {
                id: 1,
                name: 'Ground Beef',
                measurement: 'lb',
                qty: 1,
            },
            {
                id: 2,
                name: 'Refried Beans',
                measurement: 'can',
                qty: 1,
                modifier: false,
            },
            {
                id: 3,
                name: 'Old Elpaso Taco Seasoning',
                measurement: 'packette',
                qty: 1,
                modifier: false,
            },
            {
                id: 4,
                name: 'Tex-Mex Cheese',
                measurement: 'package',
                qty: 1,
                modifier: false,
            },
            {
                id: 5,
                name: 'Sour Cream',
                measurement: 'small container',
                qty: 1,
                modifier: false,
            },
        ],
        directions: [
            {
                id: 1,
                text: 'Cook the [1:ground beef] in a frying pan. Once cooked through (8-10 mins) add [3:taco seasoning packette] and a 2/3 cup of water, combine and let the mixture simmer down. This is a good time to preheat the oven.',
            },
            {
                id: 2,
                text: 'Add [2:refried beans] to the pan and mix together. Spread the mixture into a baking pan then layer [5:sour cream] and [4:tex-mex cheese] over the top.',
            },
            {
                id: 3,
                text: 'Once the oven is ready, bake in the center rack for roughly 10 mins or until the cheese on top is melted. Let stand for 5 minutes. Enjoy with Tostitos scoops.',
            },
        ]
    },
    {
        id: 2,
        date_created: 1651804543849,
        slug: 'potato-bacon-soup',
        title: 'Potato Bacon Soup',
        short: 'Warm & Cozy',
        description: 'Perfect hot meal for a cold day.',
        featured_image: 'https://platedcravings.com/wp-content/uploads/2016/01/Potato-Bacon-Soup-Plated-Cravings-2.jpg',
        featured_image_alt: 'Hot bowl of soup.',
        tags: [
            'soup', 'warm', 'hot', 'cozy', 'creamy'
        ],
        meta: {
            difficulty: 2,
            servings: '8',
            prep_time: '20',
            cook_time: '30',
            oven: {
                temp_unit: "F",
                temp: ""
            }
        },
        ingredients: [
            {
                id: 1,
                name: 'Bacon',
                measurement: 'lb',
                qty: 1,
                modifier: 'chopped',
            },
            {
                id: 2,
                name: 'Onion',
                measurement: '',
                qty: 1,
                modifier: 'chopped',
            },
            {
                id: 3,
                name: 'Garlic',
                measurement: 'cloves',
                qty: 3,
                modifier: 'minced or crushed',
            },
            {
                id: 4,
                name: 'Potatoes',
                measurement: '',
                qty: 8,
                modifier: 'peeled & cubed',
            },
            {
                id: 5,
                name: 'Chicken Stock',
                measurement: 'cups',
                qty: 4,
                modifier: false,
            },
            {
                id: 6,
                name: 'Butter',
                measurement: 'tbsp.',
                qty: 3,
                modifier: false,
            },
            {
                id: 6,
                name: 'All-Purpose Flour',
                measurement: 'cup',
                qty: 1,
                modifier: false,
            },
            {
                id: 7,
                name: 'Dried Herbs',
                measurement: 'tsp.',
                qty: 1,
                modifier: false,
            },
            {
                id: 8,
                name: 'Heavy Cream',
                measurement: 'cup',
                qty: 1,
                modifier: false,
            },
        ],
        directions: [
            {
                id: 1,
                text: 'In a Dutch oven, cook the [1:bacon] over medium heat until done. Remove bacon from pan, and set aside. Drain off all but 1/4 cup of the bacon grease.',
            },
            {
                id: 2,
                text: 'Cook [2:onion] in reserved bacon drippings until onion is translucent, about 5 minutes. Stir in [3:garlic], and continue cooking for 1 to 2 minutes. Add cubed [4:potatoes], and toss to coat. Saute for 3 to 4 minutes. Return bacon to the pan, and add enough [5:chicken stock] to just cover the potatoes. Cover, and simmer until potatoes are tender.',
            },
            {
                id: 3,
                text: ' In a separate pan, melt [6:onion] over medium heat. Whisk in [7:flour]. Cook, stirring constantly, for 1 to 2 minutes. Whisk in the [8:heavy cream], and [7:dried herbs]. Bring the cream mixture to a boil, and cook, stirring constantly, until thickened. Stir the cream mixture into the potato mixture. Puree about 1/2 the soup, and return to the pan. Adjust seasonings to taste.',
            },
        ]
    },
    {
        id: 3,
        date_created: 1651804544849,
        slug: 'creamy-chicken-rice',
        title: 'Creamy Chicken & Rice',
        short: 'Hot & Ready',
        description: '',
        featured_image: 'https://www.cookingclassy.com/wp-content/uploads/2017/09/one-pan-creamy-chicken-rice-1.jpg',
        featured_image_alt: 'Hot bowl of soup.',
        tags: [
            'meat', 'rice', 'creamy'
        ],
        meta: {
            difficulty: 1,
            servings: '1',
            prep_time: '10',
            cook_time: '40',
            oven: {
                temp_unit: 'F',
                temp: '375'
            }
        },
        ingredients: [
            {
                id: 1,
                name: 'Cream of Chicken Soup',
                measurement: 'cans',
                qty: 2,
            },
            {
                id: 2,
                name: 'Chicken Breasts',
                measurement: '',
                qty: 2,
            },
            {
                id: 3,
                name: 'White Rice',
                measurement: 'cup',
                qty: 1,
            },
        ],
        directions: [
            {
                id: 1,
                text: 'Fill a square glass container with 2 cans of [1:cream of chicken soup].',
            },
            {
                id: 2,
                text: 'Cook [3:rice] and add it with any seasonings you want to the mixture.',
            },
            {
                id: 3,
                text: 'Preheat the oven to 375°F and bake until the [2:chicken] is cooked through(internal temperature of 165°F), roughly 40 minutes.',
            },
        ]
    },
    {id:4,date_created: 1651804545849,slug:"chicken-parmesean",title:"Chicken Parmesean",short:"Chicky Chicky Parm Parm",description:"This probably isn't the best way to do this but hey.. that's not why you're here.",featured_image:"https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg",featured_image_alt:"Chicken Parm",tags:["italian","chicken","breaded","saucy","dinner","pasta"],meta:{difficulty:2,servings:2,prep_time:10,cook_time:30,cooks_note:"",oven:{temp_unit:"F",temp:425}},ingredients:[{id:1,name:"Chicken Breasts",measurement:"",qty:"2"},{id:2,name:"Pasta",measurement:"cups",qty:"2",modifier:"penné or other"},{id:3,name:"Pasta Sauce",measurement:"cups",qty:"2",modifier:""},{id:4,name:"Italian Bread Crumbs",measurement:"cups",qty:"1.5",modifier:""},{id:5,name:"Panko",measurement:"cups",qty:".5",modifier:""},{id:6,name:"Garlic Powder",measurement:"tbsp.",qty:"1",modifier:""},{id:7,name:"Mayonaise",measurement:"tbsp.",qty:"4",modifier:""},{id:8,name:"Mozzarella Cheese",measurement:"chunk",qty:"1",modifier:"sliced"},{id:9,name:"Parmesean",measurement:"cup",qty:".75",modifier:"grated"}],directions:[{id:1,text:"In a mixing bowl or plastic bag, add the [4:italian bread crumbs], [5:panko] and [6:garlic powder]. Then, either butterfly or pound the [1:chicken breasts] until they're half as thick. Preheat the oven, then fill a large pot with cool water and put over high heat."},{id:2,text:"While the oven preheats, cover the chicken in [7:mayo] then cover in the breading mixture. Lay on a baking sheet covered with tin foil. Bake for 20 minutes."},{id:3,text:"While that's baking, the water should be boiling. Add the [2:pasta] and some salt to the boiling water. Turn down the heat and let it simmer until the pasta is tender. Drain the pasta and return it to the pot. Mix in [3:pasta sauce] and leave it alone for a sec."},{id:4,text:"After the chicken has been in the oven for 20 minutes, take out the baking sheet and flip each piece of chicken. Mostly cover the surface of the chicken with slices of [8:mozzarella cheese] and cover with more pasta sauce, then put it back in the oven for another 5-8 mins."},{id:5,text:"Once everything is ready, heat the pasta up again if necessary and cover a plate with a layer of pasta, then place a piece of chicken on top of it. Finish by sprinkling [9:parmesean cheese] over it."}]},
    {id:5,date_created: 1651804546849,slug:"chili",title:"Chili",short:"¡Mucha buena y caliente!",description:"Chili is the bomb",featured_image:"https://www.simplyrecipes.com/thmb/NplDVtX5TrFUsLofhfkDsVtrwhg=/735x0/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__12__Beef-Chili-LEAD-VERTICAL-2e908cb8aceb4a71bfd495f76b3f0481.jpg",featured_image_alt:"Pot of chili",tags:["spicy","warm","hot","mexican","soup"],meta:{difficulty:2,servings:6,prep_time:5,cook_time:25,cooks_note:"",oven:{temp_unit:"F",temp:""}},ingredients:[{id:1,name:"Olive Oil",measurement:"tbsp.",qty:"1"},{id:2,name:"Onion",measurement:"",qty:"1",modifier:"diced"},{id:3,name:"Ground Beef",measurement:"lb.",qty:"1",modifier:""},{id:4,name:"Chili Powder",measurement:"tbsp.",qty:"2.5",modifier:""},{id:5,name:"Cumin",measurement:"tbsp",qty:"2",modifier:""},{id:6,name:"Tomato Paste",measurement:"tbsp.",qty:"2",modifier:""},{id:7,name:"Garlic Powder",measurement:"tbsp.",qty:"1",modifier:""},{id:8,name:"Salt",measurement:"tbsp.",qty:"1.5",modifier:""},{id:9,name:"Pepper",measurement:"tbsp.",qty:".5",modifier:""},{id:10,name:"Beef Stock",measurement:"cups",qty:"1.5",modifier:""},{id:11,name:"Small Diced Tomatoes",measurement:"can",qty:"1",modifier:""},{id:12,name:"Red Kidney Beans",measurement:"can",qty:"1",modifier:"drained & rinsed"},{id:13,name:"Tomato Sauce",measurement:"can",qty:"1",modifier:""},{id:14,name:"Cayenne Pepper",measurement:"tsp.",qty:"1",modifier:""},{id:15,name:"Sugar",measurement:"tsp.",qty:"1",modifier:""}],directions:[{id:1,text:"Add the [1:olive oil] to a large soup pot and place it over medium-high heat for two minutes. Add the [2:onion]. Cook for 5 minutes, stirring occasionally."},{id:2,text:"Add the [3:ground beef] to the pot. Break it apart with a wooden spoon. Cook for 6-7 minutes, until the beef is browned, stirring occasionally."},{id:3,text:"Add the [4:chili powder], [5:cumin], [15:sugar], [6:tomato paste], [7:garlic powder], [8:salt], [9:pepper], and optional [14:cayenne]. Stir until well combined."},{id:4,text:"Add the [10:stock], [11:diced tomatoes] (with their juice), drained [12:beans], and [13:tomato sauce]. Stir well."},{id:5,text:"Bring the liquid to a low boil. Then, reduce the heat (low to medium-low) to gently simmer the chili, uncovered, for 20-25 minutes, stirring occasionally."},{id:6,text:"Remove the pot from the heat. Let the chili rest for 5-10 minutes before serving."}]}
]

let blogs = [
    {
        id: 1,
        recipe_id: 1,
        title: 'Taco Dip',
        slug: 'taco-dip',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet pharetra nunc fermentum rutrum. Praesent blandit luctus est eu dictum. Etiam at mi ullamcorper, tempor libero a, sagittis lacus. Donec imperdiet condimentum aliquam. In sagittis magna a ultrices euismod. Sed vehicula justo ac massa elementum, nec finibus mauris tempus. Integer varius ipsum convallis ultrices posuere. Vivamus sit amet neque arcu. Fusce purus risus, porta non ipsum vel, porta rutrum lorem. Phasellus sit amet mattis ipsum. Ut mollis pharetra malesuada. Quisque sit amet eros non nibh ultricies finibus. Mauris vel viverra turpis. Etiam sem orci, mattis nec tincidunt quis, iaculis a lacus. Suspendisse dignissim quis purus vitae molestie. Donec mattis augue quis sem facilisis maximus. Phasellus laoreet leo imperdiet, congue odio sed, luctus lorem. Maecenas in est vel sapien lobortis luctus iaculis id nunc. Vestibulum eu velit interdum tortor mattis accumsan. Nam accumsan accumsan lectus sed tempor. Suspendisse porttitor leo a ligula tempus, eget rhoncus risus venenatis. Duis egestas diam sed molestie ultrices. Aenean auctor dui in nulla bibendum tempor at et ante. Pellentesque hendrerit sem sit amet enim tincidunt, eget dictum ipsum sollicitudin. Duis blandit nisi eget odio rutrum, sed condimentum nisl auctor. Vestibulum quis fermentum urna. Pellentesque vitae finibus diam. Maecenas dignissim aliquam ante. Mauris at risus ligula. Integer viverra sem eget purus fermentum, in sagittis ex tempor. In varius augue orci, euismod ultricies elit consequat eu. Morbi tempor nulla odio, id commodo nunc malesuada mattis. Nulla gravida efficitur elit, eu pretium dui dignissim ac. Pellentesque sit amet condimentum orci, sit amet dignissim enim. Fusce eget lorem congue lacus ultricies molestie. Donec sollicitudin, dolor ut tincidunt venenatis, ligula augue iaculis sem, non rutrum risus ex vitae sapien. Nulla facilisi. Fusce hendrerit tortor eu purus rhoncus dignissim et a tellus. Nulla placerat ante sit amet ante ullamcorper, quis varius augue viverra. Nunc mattis tincidunt purus, in consectetur ipsum rhoncus ac. Nulla facilisi. Aliquam erat volutpat. Nullam sed facilisis diam. In condimentum urna non aliquet imperdiet. Vestibulum facilisis nisl fringilla augue tristique, sed bibendum sapien tristique. Donec pulvinar ultricies dolor, non lobortis sem aliquet sed.',
        tags: [
            'mexican', 'cheesey', 'tex-mex', 'party'
        ],
    }
]

export function getRecipes(query_vars = {}, context = 'recipes') {
    let api_url = `https://alpha.braedenbeaulieu.ca/wp-json/wp/v2/${context}`

    if(context == 'recipes') {
        query_vars._embed = '',
        query_vars.per_page = '10'
    }

    let first = true

    for(const key in query_vars) {
        if(first) {
            api_url += '?'
            first = false
        } else {
            api_url += '&'
        }

        api_url += `${key}=${query_vars[key]}`
    }
    
    return fetch(api_url)
        .then(response => response.json())
        .catch(err => console.log(err))
}

export function getRecipe(slug) {
    return fetch(`https://alpha.braedenbeaulieu.ca/wp-json/wp/v2/recipes?_embed&per_page=1&slug=${slug}`)
		.then(response => response.json())
        .catch(err => console.log(err))
}

export function getBlog(slug) {
    let found = false
    
    blogs.forEach((blog) => {
        if(blog.slug === slug) {
            found = blog
        }
    })
    
    return found
}

export function getRandomRecipe() {
    // let random = Math.floor((Math.random() * recipes.length) + 1)
    // return recipes[random]
    return fetch(`https://alpha.braedenbeaulieu.ca/wp-json/wp/v2/recipes?_embed&per_page=1&orderby=rand`)
		.then(response => response.json())
        .catch(err => console.log(err))
}