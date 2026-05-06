const Log = async (stack, level, pkg, message) => {
  try {
    const response = await fetch(
      "http://20.207.122.201/evaluation-service/logs",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization:
            "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJteS5hYy5wMm1jYTI1MDAyQG15LmF0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNjQ4MjgsImlhdCI6MTc3ODA2MzkyOCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImNmOThlZmI3LWI1MTctNGE3ZS04ZTkzLWY0ZWVhYjQyYzdiZiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFtcnV0aGEgcyIsInN1YiI6ImM5MzU1ZTgzLTkzNjgtNDcxMi1hZjllLTU4MDM5M2Y5ZWU2YyJ9LCJlbWFpbCI6Im15LmFjLnAybWNhMjUwMDJAbXkuYXR1ZGVudHMuYW1yaXRhLmVkdSIsIm5hbWUiOiJhbXJ1dGhhIHMiLCJyb2xsTm8iOiJhYTFiYiIsImFjY2Vzc0NvZGUiOiJQVEJNbVEiLCJjbGllbnRJRCI6ImM5MzU1ZTgzLTkzNjgtNDcxMi1hZjllLTU4MDM5M2Y5ZWU2YyIsImNsaWVudFNlY3JldCI6IkRTaEdKRUVTWlFtZ3JxZ1kifQ.-GIRxjQXTuEUTyabt-AwM61oqgzURs-K4rnRAcvL-1g",
        },

        body: JSON.stringify({
          stack: stack,
          level: level,
          package: pkg,
          message: message,
        }),
      }
    );

    const data = await response.json();

    console.log("Log Success:", data);

  } catch (error) {
    console.log("Logging Error:", error);
  }
};

export default Log;