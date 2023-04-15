const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(){
    this.rootInternal = null;
  }

  root() {
    return this.rootInternal;
  }

  add(data) {
    this.rootInternal  = addToNodeRec(data, this.rootInternal);
    
    function addToNodeRec(data, node){

      if (!node){
        return new Node(data);
      }

      if (node.data === data){
        return node;
      }

      if (node.data > data) {
        node.left = addToNodeRec(data, node.left);
      } else {
        node.right = addToNodeRec(data, node.right);
      } 
      return node
    }
  }

  has(data) {
    return this.find(data) != null
  }

  find(data) {
    return findRec(data, this.rootInternal)

    function findRec(data, node){
      if (!node){
        return null;
      }

      if (node.data === data){
        return node
      }

      if (node.data > data) {
        return findRec(data, node.left)
      } else {
        return findRec(data, node.right)
      }
    }
  }

  remove(data) {

  }

  min() {
    let res = minRec(this.rootInternal)

    if (!res){
      return null;
    }

    return res.data

    function minRec(node){
      if (!node.left){
        return node
      }
      return minRec(node.left)
    }
  }

  max() {
    let res = maxRec(this.rootInternal)

    if (!res){
      return null;
    }
    
    return res.data

    function maxRec(node){
      if (!node.right){
        return node
      }
      return maxRec(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree,
};
