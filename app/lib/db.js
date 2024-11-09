const { userid, password } = process.env;

export const connectionStr ="mongodb+srv://"+userid+":"+password+"@cluster0.cawww.mongodb.net/carDoctor?retryWrites=true&w=majority&appName=Cluster0";
