const express=require("express");
const router=express.Router();
const {
    createMember,
    getMembers,
    getMemberById,
    updateMember,
}=require("../controllers/memberController");

router.post("/", createMember);
router.get("/", getMembers);
router.get("/:id", getMemberById);
router.put("/:id", updateMember);

module.exports=router;