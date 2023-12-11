exports.calculate = function(expression) {
    const opps = expression.split(' ');
    const arr = [];
  
    for (let i = opps.length - 1; i >= 0; i--) {
      const opp = opps[i];
  
      if (!isNaN(opp)) {
        arr.push(parseFloat(opp));
      } else {
        const opp1 = arr.pop();
        const opp2 = arr.pop();
  
        switch (opp) {
          case '+':
            arr.push(opp1 + opp2);
            break;
          case '-':
            arr.push(opp1 - opp2);
            break;
          case '*':
            arr.push(opp1 * opp2);
            break;
          case '/':
            arr.push(opp1 / opp2);
            break;
          default:
            throw new Error(`Operator not Supported: ${opp}`);
        }
      }
    }
  
    return arr.pop();
  };
  