"use strict";
const db = require("../models");
const comment = db.comments;
const Op = db.Sequelize.Op;
exports.findAll = async (req, res) => {
    try {
        const comments = await comment.findAll();
        res.json(comments);
    }
    catch (error) {
        console.error('Error fetching all comments:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.findByPk = async (req, res) => {
    try {
        const comment_Id = req.params.id;
        if (isNaN(comment_Id) || !Number.isInteger(parseFloat(comment_Id))) {
            return res.status(400).json({ error: 'Invalid ID. ID must be an integer.' });
        }
        const Comment = await comment.findByPk(comment_Id);
        res.json(Comment);
    }
    catch (error) {
        console.error('Error fetching Comment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.create = async (req, res) => {
    try {
        const newComment = req.body;
        // Validate required fields
        if (!newComment.name || !newComment.comment || !newComment.book_id) {
            res.status(400).json({ error: 'There are  required filed was missed ' });
            return;
        }
        const comments = await comment.create(newComment);
        res.status(201).json(comments);
    }
    catch (error) {
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            console.error('Error creating comment:', error);
            res.status(400).json({ error: 'book_id must me exist for  book' });
            //SequelizeForeignKeyConstraintError
        }
        else {
            console.error('Error creating comment:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};
exports.delete = async (req, res) => {
    try {
        const comment_Id = req.params.id;
        const Comment = await comment.findByPk(comment_Id);
        if (!Comment) {
            console.log("no Comment with this id");
            // res.json("no Comment with this id");
            res.status(404).json({ error: 'Comment not found' });
            return;
        }
        const deletedComment = await comment.destroy({
            where: { id: comment_Id },
        });
        res.json({ message: `comment with id = ${comment_Id} deleted successfully` });
    }
    catch (error) {
        console.error('Error deleting comment by id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
