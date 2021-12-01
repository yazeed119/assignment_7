package edu.najah.it.capp.exception;

public class ProtocolException extends Exception {

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ProtocolException(String message) {
        super(message);
    }
	
	@Override
	public String getMessage() {
		String message = super.getMessage();
		return "Unexpcted error in protcol: " + message;
		
	}

}
