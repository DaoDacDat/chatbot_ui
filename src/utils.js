import { EventSourceParserStream } from 'eventsource-parser/stream';

export async function* parseSSEStream(stream) {
  const sseStream = stream
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new EventSourceParserStream())
  
  // console.log("", sseStream);
  for await (const chunk of sseStream) {
    if (chunk.type === 'event') {
      // console.log("", chunk.data);
      yield chunk.data;
    } 
  }
}