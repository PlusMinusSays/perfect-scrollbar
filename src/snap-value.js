export default function(value, snapValue) {
  // play w this?
  let boost = 0; //0.4 * (value > element.scrollTop ? 1 : -1)
  let snapped = Math.round((value / snapValue) + boost) * snapValue;

  console.log('snapValue', value, snapped);

  return snapped    
}
