function areaAndPerimeter(L1,B1,L2,B2) {
    let area1 = (L1*B1);
    let area2 = (L2*B2);
    let peri1 = (2*(L1+B1));
    let peri2 = (2*(L2+B2));
    console.log(area1>area2);
    console.log(peri1>peri2);
}
areaAndPerimeter(10,4,1,23)