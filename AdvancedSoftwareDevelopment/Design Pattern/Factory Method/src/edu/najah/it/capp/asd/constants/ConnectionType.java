package edu.najah.it.capp.asd.constants;
import edu.najah.it.capp.asd.service.Connection;
import edu.najah.it.capp.exception.ProtocolException;
import edu.najah.it.capp.asd.Processor;

public class ConnectionType {
	
	public static final String TELNET = "TELNET";
	public static final String SSH = "SSH";
	public static final String SCP = "SCP";
	public static final String FTP = "FTP";
	public static final String TFTP = "TFTP";

	public int processData(Object data)throws ProtocolException {
		if(data == null)
		{
			throw new ProtocolException("invalid data");
			return MyCnstraints.DATA_IS_NULL_RESULT;
		}
		int status = Processor.getStatus;
		
		if(status = MyCnstraints.DOWN_STATUS) {
			throw new ProtocolException("Process is down");

		}
		if (status == MyCnstraints.BUSY_STATUS) {
			Processor.release();

			throw new ProtocolException("Processor is busy, maybe try again");
		}
		
		if(status == MyCnstraints.READY_STATUS) {
			Processor.release();
			status = Processor.analyze(data);
		}
		if(status = MyCnstraints.DONE_RESULT) {
			Processor.release();
			throw new ProtocolException("Faied to process");
		}
		else {
			Processor.release();
			throw new ProtocolException("no proccesed");


		}
		return MyCnstraints.NO_RUN_RESULT;
		
	}
}

