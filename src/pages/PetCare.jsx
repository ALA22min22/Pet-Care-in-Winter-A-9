import React from 'react';

const PetCare = () => {
    return (
        <div className='w-11/12 mx-auto my-10  '>
            <h3 className='text-5xl font-extrabold '>Cold Weather Safety Tips</h3>
            <img className='my-7' src="https://i.ibb.co.com/dJ2j4psN/Pix-Verse-Image-Effect-prompt-Cold-Weather-Safe.jpg" alt="" />
            <p className='text-3xl font-semibold text-red-400'>Exposure to winter’s dry, cold air and chilly rain, sleet and snow can cause chapped paws and itchy, flaking skin, but these aren’t the only discomforts pets can suffer. Winter walks can become downright dangerous if chemicals from ice-melting agents are licked off of bare paws. To help prevent cold weather dangers from affecting your pet’s health, check out our top 10 cold weather safety tips from our experts at the ASPCA Animal Poison Control Center APCC. </p>

            <div className='w-10/12 mx-auto my-5'>
                <ol className='list-decimal grid grid-cols-1 gap-5 text-black-300 text-[20px] '>
                    <li>Remember, if it’s too cold for you, it’s probably too cold for your pet, so keep your animals inside. If left outdoors, pets can freeze, become disoriented, lost, stolen, injured or killed. In addition, don’t leave pets alone in a car during cold weather, as cars can act as refrigerators that hold in the cold and cause animals to freeze to death.</li>
                    <li>Keep your home humidified and be sure to towel dry your pet as soon as they come inside. Repeatedly going into the cold and then comin back into a warm home can cause itchy, flaking skin. Pay close attention to their feet and in-between their toes and remove any snow balls from between their foot pads to prevent and treat skin irritation in the winter. </li>
                    <li>Massage petroleum jelly or other vet-approved paw protectants into paw pads before going outside to protect from salt and chemical agents. Booties can provide even more coverage and can also prevent sand and salt from getting lodged between bare toes and causing irritation. Use pet-friendly ice melts whenever possible.</li>
                    <li>Never shave your dog down to the skin in winter. A longer coat will provide more warmth. If your dog is long-haired, simply trim them to minimize the clinging ice balls, salt crystals and de-icing chemicals that can dry their skin, and don’t neglect the hair between their toes. If your dog is short-haired, consider getting them a coat or sweater with a high collar or turtleneck with coverage from the base of the tail to the belly.</li>
                    <li>After each walk, make sure to wash and dry your pet's feet and stomach to remove ice, salt and chemicals. Don't forget to check for cracks in paw pads or redness between the toes. You may also want to bring a towel on long walks to clean off stinging, irritated paws. </li>
                    <li>Bathe your pets as little as possible during cold spells. Washing too often can remove essential oils and increase the chance of developing dry, flaky skin. If your pooch must be bathed, ask your vet to recommend a moisturizing shampoo and/or rinse.</li>
                    <li>Thoroughly clean up any anitfreeze spills. Like coolant, antifreeze is a lethal for dogs and cats. Be sure to thoroughly clean up any spills from your vehicle, and consider using products that contain propylene glycol rather than ethylene glycol. Additionally, cold weather chemicals like ice melts can be dangerous when ingested, so always be mindful and keep chemicals up and out of paws' reach.</li>
                    <li>Feed your pet a little extra in the winter months. Pets burn extra energy by trying to stay warm in wintertime. Feeding them a little bit more can provide much-needed calories, and making sure they have plenty of water to drink will help keep them well-hydrated and their skin less dry.</li>
                    <li>Make sure your companion animal has a warm place to sleep, off the floor and away from all drafts. A cozy dog or cat bed with a warm blanket or pillow is perfect.</li>
                    <li>Never let your dog off leash on snow or ice, especially during a snowstorm. Dogs can lose their scent in the snow and easily become lost. More dogs are lost during the winter than during any other season, so make sure your dog always wears an ID tag. </li>
                </ol>
                
            </div>
            <p className='text-3xl font-semibold pb-5'>Be sure to keep these tips top of mind this winter so that you and your furry friends can stay warm, cozy and safe.
                    If you think your pet may have ingested antifreeze or another potential toxin, contact your veterinarian or the ASPCA Animal Poison Control Center at (888) 426-4435 immediately.</p>
        </div>
    );
};

export default PetCare;