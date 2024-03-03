export const dressCodeDenials = [
  "Fashion failure: denied entry! 🚫👎",
  "VIP exclusive: not for your look! 🤐🚷",
  "Outfit disaster: turn around! 🤦‍♂️🚫",
  "Style rejection: exit promptly! 🚷🏃‍♀️",
  "Your outfit? A total disaster! 🚫👔",
  "Access denied: your style's a joke! 🙅‍♂️👠",
  "Dress disaster: not our spotlight! 🤢🚫",
  "Fashion emergency: code red! 🚨👗",
  "Your look is a crime scene! 🚨🕵️‍♀️",
  "Red alert: wardrobe catastrophe! 🔴👚",
  "Code red: evacuate that outfit! 🚑👢",
  "Emergency exit: fashion nightmare! 🚫👗",
  "Fashion violation: immediate exile! 🚷👚",
  "Dress drama: evacuate, please! ⚠️👠",
  "Abort mission: outfit disaster! 🚀👡",
  "Emergency exit: style apocalypse! 🚨👙",
  "Outfit malfunction: abandon ship! 🆘👖",
  "Not on the guest list: that horror! ❌👗",
  "Evacuate immediately: style crisis! 🚨👠",
  "Style squad only: you're not in! 🚀👗",
  "Red carpet reject: exit, stage left! 🎭❌",
  "Emergency evacuation: outfit horror! 🚑👚",
  "Security breach: fashion atrocity! 🚨🕵️‍♂️",
  "Dress disaster: evacuate now! 🚫👢",
  "Fashion crime scene: quarantine! 🕵️‍♀️🚷",
  "Emergency exit: style disaster! 🚑👡",
  "Dress code failure: fashion chaos! 🚫👗",
  "Evacuate the runway: outfit chaos! 🏃‍♂️👚",
  "Code violation: immediate exile! 🚨👖",
  "Runway reject alert: clear out! 🚷🏃‍♀️",
  "Emergency exit: fashion meltdown! 🆘👠",
  "Style disaster: evacuate now! 🚨👙",
  "Dress code breach: exit urgently! 🚷👗",
  "Runway reject: leave now! 🚫👡",
  "Style catastrophe: evacuate! 🚑👚",
  "Emergency alert: outfit disaster! 🚨👢",
  "Runway disaster: get out now! 🚫👠",
  "Dress code violation: exile! 🚷👚",
  "Fashion fail: evacuate! 🚷👗",
  "Dress meltdown: exit, quick! 🆘👙",
  "Style breach: clear out now! 🚷👚",
  "Runway disaster: leave, now! 🚨👡",
  "Outfit alert: abandon now! 🚢👖",
  "Style violation: leave! 🚷👠",
  "Emergency exit: style crime! 🚨👚",
  "Dress code breach: fashion disaster! 🚫👗",
  "Fashion meltdown: exit! 🆘👖",
  "Emergency alert: outfit fail! 🚨👙",
  "Dress code disaster: leave! 🚷👢",
  "Style catastrophe: leave now! 🚑👡"
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