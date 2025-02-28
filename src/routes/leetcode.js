const express = require("express");
const leetcodeRouter = express.Router();
const axios = require("axios");
const LEETCODE_GRAPHQL_URL = require("../utils/constants");
    
    leetcodeRouter.post("/leetcode",async(req,res)=>{
        try{
        const {username} = req.body;
        if(!username){
            return res.status(400).json({message:"UserName is required"});
        }
        
        const response = await axios.post(LEETCODE_GRAPHQL_URL, {
            query: `
                query userProfileCalendar($username: String!) {
                    matchedUser(username: $username) {
                        submissionCalendar
                    }
                }
            `,
            variables: { username }
        }, {
            headers: { "Content-Type": "application/json" }
        });

        res.json(response.data);
        }catch(err){
            console.error("Error fetching Leetcode data : ",err);
        res.status(500).json({message:"Failed to fetch leetcode data"});
        }
    })


    module.exports = leetcodeRouter;