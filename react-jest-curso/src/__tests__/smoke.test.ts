describe("smoke", () => {
    test("jest está configurado", () => {
      const num1:number=5;
      const num2:number=3;
      const resultado:number= num1+num2;
      expect(resultado).toBe(8);
    });
    test("jest está configurado", () => {
        const num1:number=5;
        const num2:number=3;
        const num3:number=5;
        const resultado:number= ((num1+num2)*num3)/2;
        expect(resultado).toBe(20);
      });
  });