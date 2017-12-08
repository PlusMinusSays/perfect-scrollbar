export default function(value, snapValue) {

  // play w this?
  var boost = 0; //0.4 * (value > element.scrollTop ? 1 : -1)
  snapped = Math.round((value / snapValue) + boost) * snapValue;

  console.log('snapValue', value, snapped);

  return snapped    

}
