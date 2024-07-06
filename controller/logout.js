async function logout(request,response){
    try {
        const cookieOptions = {
            httpOnly : true,
            secure : true,
        }

        console.log("LogOut Successfully")
        return response.cookie('token',"",cookieOptions).status(200).json({
            message : "Logout Successfully",
            success : true
        })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = logout