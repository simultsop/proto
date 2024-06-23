export async function onRequestGet({request, env}) {
  try {
    let { results } = await env.db.prepare(
      `SELECT * FROM your-table-name`,
    )
      .all();
    return Response.json(results)
  } catch (e) {
    return new Response(e.message, {status: 500});
  }
}

export async function onRequestPost({request, env}) {
  const formData = await request.formData();

  try {
    const result = await env.db
      .prepare('INSERT INTO your-table-name (columnName1, columnName2) VALUES (?1, ?2)')
      .bind(
        formData.get('columnName1'),
        formData.get('columnName2')
      )
      .run();
    return Response.json(result)
  } catch (e) {
    return new Response(e.message, {status: 500});
  }
}
