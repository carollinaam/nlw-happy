const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')
Database.then(async db =>  {
    //inserir dados na tabela 
    await saveOrphanage(db, {
        lat: "-19.8393178",
        lng: "-43.9861584",
        name: "Lar das criancas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "3199979991",
        images: [
          "https://images.unsplash.com/photo-1539893867126-7ce0b48971ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
    
          "https://images.unsplash.com/photo-1534982841079-afde227ada8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ].toString(),
        instructions: "Venha para se sentir à vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: das 9h até 20h",
        open_on_weekends: "1"
    })

    //consultar dados na tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar apenas um orfanato 
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    //console.log(orphanage)

    //del dados na tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id='17'"))

})
