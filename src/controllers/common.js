const Paragraph = require("../models/common");


const sortParagraph = async (req, res) => {

    const paragraph = req.body.text;
    
    const sortedParagraph = paragraph.split(' ').sort().join(" ");
    const SParagraph = new Paragraph({text: sortedParagraph});
    
     try {
         await SParagraph.save();
         res.status(201).send({
               message:"sorted successfully",
               data: SParagraph
            
        });
    } catch(error) {
        console.log(error);
        res.status(400).send({
          message: "Failed to sort"
        });
    }
};

module.exports = { sortParagraph };
