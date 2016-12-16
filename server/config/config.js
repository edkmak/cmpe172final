module.exports = {
	// disbable logging for testing
logging: false,
  db: {
        // the database url to connect!
        // changed to my EC2 hostname                                                                                                                                              
        url: 'mongodb://ec2-52-88-133-41.us-west-2.compute.amazonaws.com'
    }
}