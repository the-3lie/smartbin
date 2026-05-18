const User = require("../models/User"); 

// ================= REGISTER ================= 
exports.register = async (req, res) => { 
  
      try { const user = new User({ 
        
        nom: req.body.nom, 
        prenom: req.body.prenom, 
        email: req.body.email, 
        motdepasse: req.body.motdepasse,
        role: req.body.role
       
      }); 
      
      await user.save();
      res.status(201).json({ 
        
        success: true,
        message: "Utilisateur enregistré", 
        user
       }); 
      } catch (error) { 
        console.log(error);

        res.status(500).json({
           success: false, 
           message: error.message
           }); 
          } 
        }; 
        
        // ================= LOGIN ================= 

exports.login = async (req, res) => {
  
        try { 
          const { email, motdepasse, role } = req.body; 
          if (!email || !motdepasse) 
              { return res.status(400).json({
                 success: false, 
                 message: "Veuillez remplir tous les champs"
                });
              } 
          const user = await User.findOne({ email });
          
          if (!user) { return res.status(404).json({
             success: false,
             message: "Utilisateur introuvable"
             });
            
          } if (user.motdepasse !== motdepasse) {
           return res.status(401).json({
             success: false, 
             message: "Mot de passe incorrect" });
             } 

          if(use.role !== role){
            return res.status(403).json({
              success: false,
              message:"accès refusé"
            })
          }
          res.status(200).json({ 
            
        success: true, 
        message: "Connexion réussie",
        user: { id: user._id, 
                nom: user.nom,
                prenom: user.prenom, 
                email: user.email,
                role:user.role
              } }); 
            } catch (error) {
               console.log(error); 
               res.status(500).json({ 
              success: false,
              message: error.message }); 
            } 
          };