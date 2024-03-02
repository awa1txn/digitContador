export const dressCodeDenials = [
    "Fashion faux pas—exit stage left. 🚫",
    "No meme chic—exit is that way. 👉",
    "Sorry, meme's at the door, not you. 🚪",
    "Dress code says 'style,' not 'meme.' 💃",
    "Meme-free zone, you're not exempt. 🚫",
    "Fashion emergency, not a meme party. 🚑",
    "Meme outfits not on VIP list. 🚫🎩",
    "Meme vibes? Not tonight's aesthetic. 🌟",
    "Dress code alert: memes not invited. 🚨",
    "VIP area: no memes, no exceptions. 🚫🎟️",
    "Meme alert! Dress code violation. 🚫👗",
    "Sorry, memes canceled at the door. 🚫🎉",
    "Dress code says 'no meme zone.' 🚷",
    "Meme crisis: fashion intervention needed. ⚠️👗",
    "Fashion police, memes in custody. 👮‍♂️👚",
    "Wrong runway—meme fashion not allowed. 🛑👠",
    "Code red: memes not runway-ready. 🚨👢",
    "Meme dress code? Denied entry. 🚫👖",
    "VIP alert: memes not on guest list. 🚫🎫",
    "Your attire? More meme than mean. 😐🚫",
    "This isn't the meme awards, exit. 🏆🚶‍♂️",
    "Security alert: memes uninvited. 🚫👚",
    "Meme vibes clash with the dress code. 🚫🎭",
    "Code orange: memes not on tonight's agenda. 🚫📅",
    "Not a meme convention, dress appropriately. 🚷👕",
    "Memo: memes not on tonight's agenda. 📝🚫",
    "Meme-free zone: dress accordingly. 🚷👗",
    "Dress code memo: memes not tolerated. 🚫📄",
    "Meme fashion? Denied entry. 🚫👠",
    "Meme check: not on our list. 🚫✅",
    "Meme meltdown at the door. 🚫🔥",
    "Security says: memes, out. 🚫👋",
    "Sorry, meme madness not accepted. 🚫🤯",
    "Dress code breach: memes detected. 🚫🕵️‍♂️",
    "Meme attire rejected, exit stage left. 🚫👗",
    "Meme intervention needed—stat. ⚠️👗",
    "Exit strategy: meme fashion. 🚪👘",
    "This isn't a meme party—move along. 🚷🚶‍♂️",
    "Fashion police alert: memes spotted. 👮‍♀️👚",
    "Emergency exit for meme attire. 🚪🚫",
    "Meme malfunction: denied entry. 🚫🔧",
    "Dress code violation: meme fashion. 🚫👗",
    "No meme passport, no entry. 🚷🛂",
    "Meme vibes clash—try next door. 🚷🚪",
    "Meme security breach—exit now. 🚫👾",
    "Sorry, meme madness not accepted. 🚫🤯",
    "Dress code error: memes detected. 🚫❌",
    "Meme wear? Fashion emergency. 🚫👗",
    "Meme intervention in progress. ⚠️👕",
    "Meme-free policy: strictly enforced. 🚷🚫"
  ];
  

    /**
    * @param {string | any[]} array
    */
    export function getRandomElementFromArray(array) {
        if (array.length === 0) {
          return undefined; // Return undefined for an empty array
        }
      
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
        }
    