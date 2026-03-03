router.delete('/delete-account/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "Account deleted successfully" });
});