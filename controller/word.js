exports.createWordCloud = async(req,res)=>{
    const url = req.url;
    try {
        console.log(url);
    } catch (error) {
        res.status(400).json(error);
    }
}