package sk.portal.movie.exception;

public class ErrorMessage {

	private String errorMessage;

	public ErrorMessage() {
	}

	public ErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
}
