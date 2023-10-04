// Parte de um teste com Jest + TS

describe('', ()=>{
    it('', async () => {
        const {
            objetoAqui
        } = await dataEmployee();

        try{
            objetoAqui.reserva = 2;
            expected(objetoAqui.limite).toBeDefined();
        }catch(error){
            expected(error).toBeDefined();
        }
    });
});