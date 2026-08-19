export const ALL_PETS = {
    cat: {name: 'Cat', image: '/cat.png', tier: 'C'},
    dog: {name: 'Dog', image: '/dog.png', tier: 'C'},
    parrot: {name: 'Parrot', image: '/parrot.png', tier: 'C'},
    slime: {name: 'Slime', image: '/slime.png', tier: 'B'},
    goblin: {name: 'Goblin', image: '/goblin.png', tier: 'B'},
    ghost: {name: 'Ghost', image: '/ghost.png', tier: 'B'}
};

export const BANNERS = [
    {
        id: "basic",
        title: 'Cozy Everyday Pets',
        description: 'Collection Of Familiar Pets From Real Life',
        pool: ['cat', 'dog', 'parrot'],
        bgGradient: 'from-amber-500 to-orange-600',
        featured: 'cat'
    },
    {
        id: "monsters",
        title: 'Fantasy Monsters Collection',
        description: 'Now You Have To Rise The Very Being You Used To Grind On',
        pool: ['slime', 'goblin', 'ghost'],
        bgGradient: 'from-indigo-600 to-purple-800',
        featured: 'ghost'
    }
]