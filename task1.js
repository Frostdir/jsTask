// Бобу скучно на уроках физики, поэтому он соорудил себе коробку с игрушками, чтобы скоротать время. Коробка особенная, потому что она имеет возможность изменять гравитацию.
//     В коробке есть несколько столбцов игрушечных кубиков, расположенных в линию. i-й столбец содержит a_i кубы.
//     Сначала гравитация в коробке тянет кубики вниз. Когда Боб переключает гравитацию, он начинает тянуть все кубики к определенной стороне поля, d которая может быть либо 'L', либо 'R' (влево или вправо)
// Учитывая начальную конфигурацию кубов в поле, выясните, сколько кубов находится в каждом из n столбцов после того, как Боб переключит гравитацию.
const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);
