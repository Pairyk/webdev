import { useState } from 'react';
import { ALL_PETS, BANNERS } from './data/petData';

const [phase, setPhase] = useState('nothing');
const [currentPet, setCurrentPet] = useState('nothing');


const randomPet = pool[MATH.floor(MATH.random() * pool.length)]