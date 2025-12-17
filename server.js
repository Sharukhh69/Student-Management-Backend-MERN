const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const studentRoutes=require('./routes/studentRoutes')
const cors=require('cors')
dotenv.config()
connectDB()

const app=express()
app.use(express.json())
app.use(cors())

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Student Management API is running!', endpoints: ['/api/students'] })
})

app.use('/api/students',studentRoutes)
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))